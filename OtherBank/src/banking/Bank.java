package banking;

import java.util.LinkedHashMap;

/**
 * Private Variables:<br>
 * {@link #accounts}: List&lt;Long, Account&gt;
 */
public class Bank implements BankInterface {
	private LinkedHashMap<Long,Account> accounts = new LinkedHashMap<Long,Account>();

	public Bank() {
		// complete the function
	}

	private Account getAccount(Long accountNumber) {
		Account ac = accounts.get(accountNumber);
        return ac;
	}

	public Long openCommercialAccount(Company company, int pin, double startingDeposit) {
		CommercialAccount ca = new CommercialAccount(company, accounts.size()+1L, pin, startingDeposit);
		accounts.put( accounts.size()+1L, ca);
        return accounts.size()+0L;
	}

	public Long openConsumerAccount(Person person, int pin, double startingDeposit) {
		ConsumerAccount ca = new ConsumerAccount(person, accounts.size()+1L, pin, startingDeposit);
		accounts.put( accounts.size()+1L, ca);
        return accounts.size()+0L;
	}

	public boolean authenticateUser(Long accountNumber, int pin) {
		Account ac = accounts.get(accountNumber);
        return ac.validatePin(pin);
	}

	public double getBalance(Long accountNumber) {
		Account ac = accounts.get(accountNumber);
		//System.out.println(ac);
        return ac.getBalance();
	}

	public void credit(Long accountNumber, double amount) {
		Account ac = accounts.get(accountNumber);
		ac.creditAccount(amount);
		accounts.put(accountNumber, ac);
	}

	public boolean debit(Long accountNumber, double amount) {
		Account ac = accounts.get(accountNumber);
        return ac.debitAccount(amount);
	}
}
