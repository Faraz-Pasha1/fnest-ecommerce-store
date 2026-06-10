$f = 'src\pages\Cart.jsx'
$c = Get-Content $f -Raw

# Fix space-y-5 -> space-y-4 (the one inside Order Summary, preceded by a specific h3)
# We'll just do a simple replace since space-y-5 in this context is unique enough
$c = $c -replace '(<h3 className="text-xl font-playfair font-bold border-b border-white/10 pb-4">Order Summary</h3>\s+)\s+<div className="space-y-5">', '$1' + "`r`n" + '                    <div className="space-y-4">'

# Format the collapsed product row with proper indentation/newlines
$oldRow = '                        <div key={item.id} className="flex justify-between items-start gap-3"><div className="flex-1 min-w-0"><p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p><p className="text-gray-500 text-xs mt-0.5">Rs. {item.price} x {item.quantity}</p></div><span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span></div>'
$newRow = '                         <div key={item.id} className="flex justify-between items-start gap-3">' + "`r`n" +
          '                           <div className="flex-1 min-w-0">' + "`r`n" +
          '                             <p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p>' + "`r`n" +
          '                             <p className="text-gray-500 text-xs mt-0.5">Rs. {item.price} x {item.quantity}</p>' + "`r`n" +
          '                           </div>' + "`r`n" +
          '                           <span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span>' + "`r`n" +
          '                         </div>'

if ($c.Contains($oldRow)) {
    $c = $c.Replace($oldRow, $newRow)
    Write-Host 'Row expanded OK'
} else {
    Write-Host 'Row NOT found - checking alternate spacing...'
    # Try with different leading spaces
    $oldRow2 = '                         <div key={item.id} className="flex justify-between items-start gap-3"><div className="flex-1 min-w-0"><p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p><p className="text-gray-500 text-xs mt-0.5">Rs. {item.price} x {item.quantity}</p></div><span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span></div>'
    if ($c.Contains($oldRow2)) {
        $c = $c.Replace($oldRow2, $newRow)
        Write-Host 'Row expanded OK (alt spacing)'
    } else {
        Write-Host 'Row still not found'
    }
}

Set-Content $f -Value $c -NoNewline -Encoding UTF8
Write-Host 'Done'
