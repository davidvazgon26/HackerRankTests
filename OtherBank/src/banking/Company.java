package banking;

public class Company  extends AccountHolder{
	private String companyName;
	private int taxId;

	public Company(String companyName, int taxId) {
		super(taxId);
		this.companyName = companyName;
		this.taxId = taxId;
	}

	public String getCompanyName() {
		// complete the function
        return companyName;
	}
}
