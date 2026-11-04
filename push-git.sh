
git add .
git status
read -p "Enter the message:"  message
echo $message
git commit -m "$message"
git push origin main