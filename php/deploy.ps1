# PowerShell.exe -File deploy.ps1
# TODO http://stackoverflow.com/questions/23953779/gulp-watch-and-compile-less-files-with-import
Write-Host "Copying files to XAMPP folder..."
Copy-Item * c:\xampp\htdocs -recurse -force
Write-Host "Complete."
