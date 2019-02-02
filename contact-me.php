	<?php

	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
		$to = 'gorzanski.mateusz@gmail.com';
		$subject = $_POST['subject'];
		$message = $_POST['message'];
		$headers = 'From: '.$_POST['email'] . "\r\n" .
			'Reply-To: '.$_POST['email'] . "\r\n" .
			'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $message, $headers);
	}

	?>
	<?php $loadScripts = true; ?>
	<?php include 'template/header.php'; ?>

	<main class="site-content empty-space">
		<div class="row center-lg center-md center-sm center-xs">
			<div class="col-lg-7 col-md-11 col-sm-11 col-xs-11">
				<div class="box">
					<section class="contact-me">
						<h2 class="section-title">Contact me</h2>
						<div class="row center-xs">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-me_description">
								<div class="box">
									<p class="contact-me_text text-space">If you want to contact me, please fill the form bellow, or just write an email to: <b>gorzanski.mateusz@gmail.com</b>.</p>
								</div>
							</div>

							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 contact-me_form">
								<div class="box">
									<form action="" method="post">
										<div class="row">
											<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 start-lg start-md start-sm start-xs">
												<div class="box contact-me_margin-right">
													<label class="contact-me_label" for="nameInput">Your Name:</label>
													<input class="contact-me_input" type="text" name="name" id="nameInput" placeholder="Name" required>
												</div>
											</div>

											<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 start-lg start-md start-sm start-xs">
												<div class="box contact-me_margin-left">
													<label class="contact-me_label" for="emailInput">Your Email:</label>
													<input class="contact-me_input" type="email" name="email" id="nameInput" placeholder="Email" required>
												</div>
											</div>
										</div>

										<div class="row">
											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
												<div class="box">
													<label class="contact-me_label" for="subjectInput">Subject:</label>
													<input class="contact-me_input" type="text" name="subject" id="nameInput" placeholder="Subject" required>
												</div>
											</div>

											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
												<div class="box">
													<label class="contact-me_label" for="messageTextarea">Message:</label>
													<textarea class="contact-me_textarea" name="message" id="messageTextarea" required></textarea>
												</div>
											</div>

											<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 start-lg start-md start-sm start-xs">
												<div class="box">
													<button type="submit" class="contact-me_submit-btn">Send</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>

	<?php include 'template/footer.php'; ?>