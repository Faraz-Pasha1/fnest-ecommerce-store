$f = 'src\pages\Cart.jsx'
$c = Get-Content $f -Raw
$old19 = '                   <div className="space-y-5">'
$new19 = '                   <div className="space-y-4">'
if ($c.Contains($old19)) {
    $c = $c.Replace($old19, $new19)
    Write-Host 'space-y-5 -> space-y-4 OK'
} else {
    Write-Host 'Not found'
}
Set-Content $f -Value $c -NoNewline -Encoding UTF8
Write-Host 'Done'
