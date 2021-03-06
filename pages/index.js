import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

// importing components
import NavigationBar from "../components/nav/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>MedMatch</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
					integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
					crossorigin="anonymous"
				/>
			</Head>
			<NavigationBar />

			<Container fluid className={styles.containerSearchBar}>
				{/* main page search bar */}
				<Row
					className={`justify-content-md-center ${styles.mainSearchBar}`}
				>
					<div className={styles.mainSearchBarContent}>
						<h1>Build your medical network</h1>
						<h5 className={styles.mainSearchBarSubtitle}>
							MedMatch facilitates the process by which McGill
							medical students find the right mentors and projects
							for their needs.
						</h5>
					</div>
				</Row>
				<Row
					className={`justify-content-md-center ${styles.mainSearchBar} ${styles.mainSearchBarBottom}`}
				>
					{/* search bar */}
					<Col sm={10}>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroup-sizing-default">
									Search for a project
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								aria-label="Default"
								aria-describedby="inputGroup-sizing-default"
							/>
						</InputGroup>
					</Col>
					<Col sm={2}>
						<Button variant="dark" block>
							Search
						</Button>
					</Col>
				</Row>
			</Container>

			<Container fluid className={styles.containerInfo}>
				<Row
					className={`justify-content-md-center ${styles.mainSearchBar}`}
				>
					<Col>
						<p className={styles.infoParagraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</Col>
					<Col className="d-flex justify-content-start">
						<Image
							src="/images/undraw_medicine_b1ol.svg"
							width="auto"
							height="auto"
						/>
					</Col>
				</Row>
			</Container>
			<footer className={styles.footer}>Copyright 2021</footer>
		</div>
	);
}
