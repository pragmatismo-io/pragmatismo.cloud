npm run build
swa deploy --env production
rm -rf out
git add .
git commit -a -m 'Updated.'
git push