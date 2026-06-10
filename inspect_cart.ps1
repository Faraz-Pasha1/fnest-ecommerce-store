$f = 'src\pages\Cart.jsx'
$lines = Get-Content $f
$lines[138..147] | ForEach-Object { 
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($_)
    Write-Host ($bytes -join ' ')
}
