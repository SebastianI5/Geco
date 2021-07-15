package com.eng.geco;

public class User {

	public String given_name;
	public String family_name;
	public String name;
	public String tenant_id;
	private static ThreadLocal<User> tl = new ThreadLocal<>();

	public User withGivenName(String given_name) {
		this.given_name = given_name;
		return this;
	}

	public User withFamilyName(String family_name) {
		this.family_name = family_name;
		return this;
	}

	public User withName(String name) {
		this.name = name;
		return this;
	}

	public User withTenantId(String tenant_id) {
		this.tenant_id = tenant_id;
		return this;
	}

	public static User user() {
		return tl.get();
	}

	public static void setUser(User u) {
		tl.set(u);
	}

}
