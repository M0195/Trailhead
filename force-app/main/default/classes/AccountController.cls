public with sharing class AccountController {
   @AuraEnabled(cacheable=true)
   public static List<ACCOUNT> getAccounts(){
       return[SELECT Id,Name,Phone,AnnualRevenue,Industry FROM ACCOUNT];
   }
}
