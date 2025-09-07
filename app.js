let packDiamond, packPrice;
function order(diamond,price){
  packDiamond=diamond; packPrice=price;
  document.getElementById('orderForm').style.display='block';
  window.scrollTo({top:document.getElementById('orderForm').offsetTop,behavior:'smooth'});
}
function submitOrder(){
  const gid=document.getElementById('gameId').value.trim();
  const sid=document.getElementById('serverId').value.trim();
  const ref=document.getElementById('abaRef').value.trim();
  if(!gid||!sid||!ref){alert('បំពេញព័ត៌មានឲ្យគ្រប់');return}
  const msg=`💎 Kimchi Diamond Order 💎
Game ID: ${gid}
Server: ${sid}
Package: ${packDiamond} diamonds
Price: ${packPrice} ៛
ABA Ref: ${ref}`;
  // ផ្ញើទៅ Telegram ឬ Email (ឧទាហរណ៍ alert មុន)
  alert(msg+'\n\nបញ្ជាទិញទទួលបាន! យើងនឹងផ្ញើរពេជ្រក្នុង 5-15 នាទី');
  document.getElementById('orderForm').reset();
  document.getElementById('orderForm').style.display='none';
}
