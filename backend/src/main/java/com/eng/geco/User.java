package com.eng.geco;

public class User {

    public String given_name;
    public String family_name;

    public User withGivenName(String given_name){
        this.given_name = given_name ;
        return this;
    }

    public User withFamilyName(String family_name){
        this.family_name = family_name ;
        return this;
    }

}
