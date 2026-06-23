#!/bin/bash
set -e

NETLIFY_TOKEN="nfp_8EMjkMCyiQAeRL67MCCETC6x6Rn8gxFF55ed"
NETLIFY_ZONE_ID="6286beeb1435163e2b9a8641"

echo "==> Saving Netlify credentials..."
mkdir -p /etc/letsencrypt/secrets
cat > /etc/letsencrypt/secrets/netlify.conf << EOF
NETLIFY_TOKEN=${NETLIFY_TOKEN}
NETLIFY_ZONE_ID=${NETLIFY_ZONE_ID}
EOF
chmod 600 /etc/letsencrypt/secrets/netlify.conf

echo "==> Writing auth hook script..."
cat > /etc/letsencrypt/renewal-hooks/pre/netlify-auth.sh << 'EOF'
#!/bin/bash
source /etc/letsencrypt/secrets/netlify.conf
RESPONSE=$(curl -s -X POST \
  -H "Authorization: Bearer $NETLIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"type\":\"TXT\",\"hostname\":\"_acme-challenge.${CERTBOT_DOMAIN}\",\"value\":\"${CERTBOT_VALIDATION}\",\"ttl\":300}" \
  "https://api.netlify.com/api/v1/dns_zones/${NETLIFY_ZONE_ID}/dns_records")
echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['id'])" > /tmp/certbot_netlify_record_id
echo "==> DNS record created, waiting 30s for propagation..."
sleep 30
EOF
chmod +x /etc/letsencrypt/renewal-hooks/pre/netlify-auth.sh

echo "==> Writing cleanup hook script..."
cat > /etc/letsencrypt/renewal-hooks/post/netlify-cleanup.sh << 'EOF'
#!/bin/bash
source /etc/letsencrypt/secrets/netlify.conf
RECORD_ID=$(cat /tmp/certbot_netlify_record_id 2>/dev/null)
if [ -n "$RECORD_ID" ]; then
  curl -s -X DELETE \
    -H "Authorization: Bearer $NETLIFY_TOKEN" \
    "https://api.netlify.com/api/v1/dns_zones/${NETLIFY_ZONE_ID}/dns_records/${RECORD_ID}"
  rm -f /tmp/certbot_netlify_record_id
  echo "==> DNS record cleaned up."
fi
systemctl reload nginx
echo "==> nginx reloaded."
EOF
chmod +x /etc/letsencrypt/renewal-hooks/post/netlify-cleanup.sh

echo "==> Updating certbot renewal config..."
# Remove any previous hook lines first, then add them
sed -i '/manual_auth_hook\|manual_cleanup_hook/d' /etc/letsencrypt/renewal/smarsgroup.org.conf
sed -i 's/authenticator = manual/authenticator = manual\nmanual_auth_hook = \/etc\/letsencrypt\/renewal-hooks\/pre\/netlify-auth.sh\nmanual_cleanup_hook = \/etc\/letsencrypt\/renewal-hooks\/post\/netlify-cleanup.sh/' /etc/letsencrypt/renewal/smarsgroup.org.conf

echo ""
echo "==> All done! Verifying setup..."
echo ""
echo "--- netlify.conf ---"
cat /etc/letsencrypt/secrets/netlify.conf
echo ""
echo "--- auth hook ---"
cat /etc/letsencrypt/renewal-hooks/pre/netlify-auth.sh
echo ""
echo "--- cleanup hook ---"
cat /etc/letsencrypt/renewal-hooks/post/netlify-cleanup.sh
echo ""
echo "--- renewal config ---"
cat /etc/letsencrypt/renewal/smarsgroup.org.conf
echo ""
echo "==> Setup complete. Run 'sudo certbot renew --dry-run' to test."
