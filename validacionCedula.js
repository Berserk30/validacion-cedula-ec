function validaCedula(cedula){
  // Control de provincia entre 1 y 24
  lv_prov=Number(cedula.substring(0,2));
  if (lv_prov>=1 && lv_prov<=24) {
    lv_numced=cedula;
    ll_TenDig=Number(cedula.substring(9,10));
    ll_sum=0;
    ll_Cnt=0;
    ll_CntPos=0;
    while(ll_CntPos<9){
  	  ll_CntPos=2*ll_Cnt+1;
	  lv_StrNum=lv_numced.substring(ll_CntPos-1,ll_CntPos);
	  ll_multi=Number(lv_StrNum)*2;
	  if(ll_multi>=10) ll_multi=1+(ll_multi%10);
	  ll_sum+=ll_multi;
	  ll_Cnt+=1;
    }
   ll_Cnt=1;
   ll_CntPos=1;
   while(ll_CntPos<8){
  	 ll_CntPos=2*ll_Cnt;
	 lv_StrNum=lv_numced.substring(ll_CntPos-1,ll_CntPos);
	 ll_sum+=Number(lv_StrNum);
	 ll_Cnt+=1;
   }
  ll_cociente=Math.floor(ll_sum/10);
  ll_decena=(ll_cociente+1)*10;
  ll_verificador=ll_decena-ll_sum;
  if (ll_verificador==10) ll_verificador=0;
  if (ll_verificador==ll_TenDig) return true;
  else return false;
  }else{
   return false;
  }
}