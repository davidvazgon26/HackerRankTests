package banking;

public class Person extends AccountHolder{
	private String firstName;
	private String lastName;
	private int idNumber;
	
	public Person(String firstName, String lastName, int idNumber) {
		super(idNumber);
		this.firstName = firstName;
		this.lastName = lastName;
		this.idNumber = idNumber;
	}

	public String getFirstName() {
		// complete the function
        return firstName;
	}

	public String getLastName() {
		// complete the function
        return lastName;
	}
}
