import type { APIRoute } from "astro";
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const name = data.get("name");
	const role = data.get("role");
	const email = data.get("email");
	const phone = data.get("phone");
	let htmlInlined = ""

	if (!name || !role || !email || !phone) {
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
					<td style="width: 100px; border: 0px; height: 87.4451px;"><img
							src="https://raw.githubusercontent.com/SUSC-KR/SUSC-ArtWork/main/SUSC.png"
							style="display: block; margin: 5px 0px; text-align: left; width: 74px;"></td>
					<td
						style="border: 0px solid rgb(221, 221, 221); padding: 3px 4px 2px; height: 87.4451px; vertical-align: middle;">
						<strong id="name" style="font-size:13px;color:#000;letter-spacing:-1px;">${name}</strong>
						<br>
						<span
							id="role" style="font-size:11px;color:#000;">
							${role} of SUSC
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
									&nbsp;${phone}
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
										&nbsp;${email}
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
									<a href="https://discord.gg/rafB4nhVxx"
										target="_blank">
										&nbsp;https://discord.gg/rafB4nhVxx
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