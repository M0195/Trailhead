public with sharing class AccountController {
    /* */
   @AuraEnabled(cacheable=true)
   public static List<Contacts> getAccounts(){
       return[SELECT Id,Name,Phone,AnnualRevenue,Industry FROM Account with SECURITY_ENFORCED];
   }
}
