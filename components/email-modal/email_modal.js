import styles from "./email_modal.module.css"

export default function EmailModal() {
	return (
		<div className={styles.modal} id="email-modal">
			<div className={styles.modal-content}>
				<span className={styles.close-btn}>&times;</span>
				<div className={styles.modal-content-left}>
					<img
						id="modal-img"
						src="./images/undraw-modal.svg"
						alt=""
					/>
				</div>
				<div className={styles.modal-content-right}>
					<form action="/" method="GET" className={styles.modal-form} id="form">
						<h1>
							Get started today! Log in with your McGill
							credentials.
						</h1>
						<div className={styles.form-validation}>
							<input
								type="email"
								className={styles.modal-input}
								id="email"
								name="email"
								placeholder="Enter your email"
							/>
							<p>Error Message</p>
							<input
								type="password"
								className={styles.modal-input}
								id="password"
								name="password"
								placeholder="Enter your password"
							/>
							<p>Error Message</p>
						</div>
						<input
							type="submit"
							className={styles.modal-input-btn}
							value="Log In"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
