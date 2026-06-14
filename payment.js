const book=JSON.parse(localStorage.getItem('selectedBook')||'{}');
const box=document.getElementById('paymentBook');
if(!book.title){box.innerHTML='<p>No ebook selected. Please go back and select an ebook.</p>';document.getElementById('payBtn').style.display='none'}else{box.innerHTML=`<h2>${book.title}</h2><p>${book.shortDescription}</p><h2>₹${book.price}</h2>`}
document.getElementById('payBtn').onclick=function(){
 const options={
  key:'rzp_test_SzYrDnuaIhknjr',
  amount:(book.price||0)*100,
  currency:'INR',
  name:'EbookStore',
  description:book.title,
  handler:function(response){alert('Payment successful. Payment ID: '+response.razorpay_payment_id); window.location.href=book.pdfUrl || 'index.html';},
  prefill:{name:'',email:'',contact:''},
  theme:{color:'#2563eb'}
 };
 const rzp=new Razorpay(options);rzp.open();
};
