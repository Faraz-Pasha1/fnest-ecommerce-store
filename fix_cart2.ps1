$f = 'src\pages\Cart.jsx'
$c = Get-Content $f -Raw

# Fix the broken x character (Ã—) back to a simple x, then restructure entire order summary product rows
$c = $c -replace 'className="flex justify-between items-center text-sm">[^<]*<span className="text-gray-300 truncate pr-4 max-w-\[60%\]">\{item\.title\} <span className="text-gray-500">[^<]*\{item\.quantity\}</span></span>[^<]*<span className="text-white font-semibold whitespace-nowrap">Rs\. \{item\.price \* item\.quantity\}</span>[^<]*</div>', 'className="flex justify-between items-start gap-3"><div className="flex-1 min-w-0"><p className="text-gray-200 text-sm font-semibold leading-tight">{item.title}</p><p className="text-gray-500 text-xs mt-0.5">Rs. {item.price} x {item.quantity}</p></div><span className="text-white font-bold text-sm whitespace-nowrap">Rs. {item.price * item.quantity}</span></div>'

# Also fix the space-y-5 on the inner div to space-y-4
# Only the one inside the order summary (not the shipping section)
# We'll target the specific context
$c = $c -replace '(<div className="space-y-5">)\s*(\{cart\.map)', '<div className="space-y-4">' + "`r`n" + '                       {cart.map'

Set-Content $f -Value $c -NoNewline -Encoding UTF8
Write-Host 'Done'
