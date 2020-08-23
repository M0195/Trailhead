public with sharing class AccountController {
   @AuraEnabled(cacheable=true)
   public static List<Contacts> getRelatedContacts(Id searchId){
       return[SELECT ID,Name,FirstName,LastName,Email,Phone FROM Contact WHERE AccountId=:searchId with SECURITY_ENFORCED];
   }
}
