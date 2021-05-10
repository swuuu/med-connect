export default function MedicalStudents() {
	return (
		<div>
			<form action="contactform.php" method="GET">
				<input
					type="text"
					name="email"
					placeholder="Please enter your email"
				/>
				<br />
				Please select your year of study
				<br />
				M1
				<input type="radio" name="email" value="M1" /> <br />
				M2
				<input type="radio" name="email" value="M1" /> <br />
				M3
				<input type="radio" name="email" value="M1" /> <br />
				M4
				<input type="radio" name="email" value="M1" /> <br />
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Write a message!"
				></textarea>
				<input type="submit" name="submit" />
			</form>
		</div>
	);
}
