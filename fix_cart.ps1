$f = 'src\pages\Cart.jsx'
$c = Get-Content $f -Raw

# Fix outer container padding & spacing
$c = $c -replace 'p-8 rounded-3xl shadow-2xl space-y-8', 'p-5 rounded-3xl shadow-2xl space-y-5'

# Fix h3 heading size
$c = $c -replace 'text-2xl font-playfair font-bold border-b border-white/10 pb-6', 'text-xl font-playfair font-bold border-b border-white/10 pb-4'

# Fix items inner spacing
$c = $c -replace 'border-t border-white/10 pt-5 space-y-3', 'border-t border-white/10 pt-4 space-y-2'

# Remove Items row entirely (with surrounding whitespace)
$c = $c -replace '(?s)\s*<div className="flex justify-between text-gray-400 text-xs uppercase tracking-widest">\s*<span>Items</span>\s*<span>\{totalItems\} Units</span>\s*</div>', ''

# Rename Shipping label
$c = $c.Replace('<span>Shipping <span className="lowercase normal-case text-[10px] text-gray-500 ml-1">(3 to 5 days)</span></span>', '<span>Delivery Fee <span className="normal-case text-[10px] text-gray-500 ml-1">(3-5 days)</span></span>')

# Fix grand total row alignment and font size
$c = $c -replace 'pt-5 border-t border-white/10 flex justify-between items-end', 'pt-4 border-t border-white/10 flex justify-between items-center'
$c = $c -replace 'text-4xl font-bold text-white tracking-tighter', 'text-2xl font-bold text-white tracking-tighter'

# Restructure product rows in order summary
$oldRow = '                         <div key={item.id} className="flex justify-between items-center text-sm">' + "`r`n" +
          '                           <span className="text-gray-300 truncate pr-4 max-w-[60%]">{item.title} <span className="text-gray-500">A-{item.quantity}</span></span>' + "`r`n" +
          '                           <span className="text-white font-semibold whitespace-nowrap">Rs. {item.price * item.quantity}</span>' + "`r`n" +
          '                         </div>'

$newRow = '                         <div key={item.id} className="flex justify-between items-start gap-3">' + "`r`n" +
          '                           <div className="flex-1 min-w-0">' + "`r`n" +
          '                             <p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p>' + "`r`n" +
          '                             <p className="text-gray-500 text-xs mt-0.5">Rs. {item.price} &times; {item.quantity}</p>' + "`r`n" +
          '                           </div>' + "`r`n" +
          '                           <span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span>' + "`r`n" +
          '                         </div>'

if ($c.Contains($oldRow)) {
    $c = $c.Replace($oldRow, $newRow)
    Write-Host 'Product row replaced'
} else {
    Write-Host 'Product row NOT found, skipping'
}

Set-Content $f -Value $c -NoNewline -Encoding UTF8
Write-Host 'Done'
