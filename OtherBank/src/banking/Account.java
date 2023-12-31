package banking;

/**
 * Abstract bank account class.<br>
 * <br>
 *
 * Private Variables:<br>
 * {@link #accountHolder}: AccountHolder<br>
 * {@link #accountNumber}: Long<br>
 * {@link #pin}: int<br>
 * {@link #balance}: double
 */
public abstract class Account {
	private AccountHolder accountHolder;
	private Long accountNumber;
	private int pin;
	private double balance;
	

	protected Account(AccountHolder accountHolder, Long accountNumber, int pin, double startingDeposit) {
		this.accountHolder = accountHolder;
		this.accountNumber = accountNumber;
		this.pin = pin;
		this.balance = startingDeposit;
	}

	public AccountHolder getAccountHolder() {
		// complete the function
        return accountHolder;
	}

	public boolean validatePin(int attemptedPin) {
		// complete the function
		if(attemptedPin == this.pin) {
			return true;
        } else {
        	return false;
        }
	}

	public double getBalance() {
		// complete the function
        return balance;
	}

	public Long getAccountNumber() {
		// complete the function
        return accountNumber;
	}

	public void creditAccount(double amount) {
		this.balance += amount;
	}

	public boolean debitAccount(double amount) {
		
		if(amount>balance) {
			return false;
		} else {
			this.balance -= amount;
	        return true;
		}
	}

	@Override
	public String toString() {
		return "Account [accountHolder=" + accountHolder + ", accountNumber=" + accountNumber + ", pin=" + pin
				+ ", balance=" + balance + "]";
	}
	
}

