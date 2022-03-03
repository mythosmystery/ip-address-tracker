echo "Starting deployment..."
yarn build
git add dist 
git commit -am "updated for deployment"
git subtree push --prefix dist origin gh-pages
git push
echo "Deployment complete!"