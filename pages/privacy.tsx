import React from "react";

export default function privacy() {
	return (
		<div className="dark:text-white p-5 md:p-10 h-full flex-1">
			<h1 className="font-bold text-3xl">Privacy Policy</h1>
			<p>Last updated: December 8th, 2024</p>
			<p className="pt-5">
				Our privacy policy is simple and straightforward. We do not collect any data.
				We use cookies to store your preferences and to improve your experience on our site.
				If you checked the 'remember me' box, a cookie is created to remember your username and an ecrypted version of your password.
				These login cookies are deleted after a week or when you log out, whichever comes first.
			</p>
			<br/>
			<hr/>
			<p className="pt-5">
			This Site is affiliated with Monumetric (dba for The Blogger Network, LLC) for the purposes of placing advertising on the Site, and Monumetric will collect and use certain data for advertising purposes. To learn more about Monumetric&rsquo;s
			data usage, click here: <a target="_blank" href="http://www.monumetric.com/publisher-advertising-privacy">Publisher Advertising Privacy</a>

			</p>
			<div className="absolute bottom-10">
			<h1 className="pt-5 font-bold text-3xl">Contact Us</h1>
			<p>
				If you have any questions about this Privacy Policy, You can contact us:
			</p>
			<ul className="list-disc pl-5">
				<li>By email: <a className="text-primary-500">support@grademelon.org</a></li>
				<li>Through our insta: <a href="https://instagram.com/grademelon" className="text-primary-500">
							@grademelon
						</a>
					
					 </li>
				<li>Or Via the <a className="text-primary-500" href="https://discord.gg/nwRs8WcQGc">Discord</a></li>
				
			</ul>
			</div>
		</div>
	);
}
