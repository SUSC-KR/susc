import type { APIRoute } from "astro";
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const name = data.get("name");
	const email = data.get("email");
	const phone = data.get("phone");
	let htmlInlined = ""

	if (!name || !email || !phone) {
		return new Response(
			JSON.stringify({
				htmlInlined: "Missing required fields",
			}),
			{ status: 400 }
		);
	}

	htmlInlined = `
	<div style="font-family: system-ui; line-height: 16px !important; font-size: 14px;"><br>
		<table style="width: 100%; border-collapse: collapse;">
			<tbody>
				<tr>
					<td style="width: 100px; border: 0px; height: 87.4451px;">
						<img
							src="https://raw.githubusercontent.com/Swift-Coding-Club/.github/main/SCC-logo.png"
							style="display: block; margin: 5px 0px; text-align: left; width: 100px;">
					</td>
					<td
						style="border: 0px solid rgb(221, 221, 221); padding: 3px 4px 2px; height: 87.4451px; vertical-align: middle;">
						<strong id="name" style="font-size:13px;color:#000;letter-spacing:-1px;">${name}</strong>
						<br>
						<span
							id="role" style="font-size:11px;color:#000;">
							Organizer of SwiftCodingClub Korea
						</span>
						<div id="contact" style="color:#7d7d7d;margin-top:7px;">
							<span
								style="font-size:11px;line-height:14px;color:#999;">
								<span
									style="font-weight:bold; color:#616161;">
									Phone
								</span> 
								<span
									style="font-size:11px; color:#7d7d7d;">
									${phone}
								</span>
							</span>
							<br>
							<span
								style="font-size:11px;color:#999;">
								<span style="font-weight:bold; color:#616161;">
									Email
								</span>
								<span
									style="font-size:11px; color:#999;">
									<a href="mailto:${email}"
										target="_blank">
										${email}
									</a>
								</span>
							</span>
							<br>
							<span style="font-size:11px;color:#999;">
								<span
									style="font-weight:bold; color:#616161;">
									Discord
								</span>
								<span
									style="font-size:11px; color:#999;">
									<a href="https://discord.gg/DWvW2ED6y4"
										target="_blank">
										https://discord.gg/DWvW2ED6y4
									</a>
								</span>
							</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	`;

	// Do something with the data, then return a success response
	return new Response(
		JSON.stringify({
			htmlInlined: htmlInlined
		}),
		{ status: 200 }
	);
};