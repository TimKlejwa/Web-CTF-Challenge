This is a web challenge for the UWSP's POINTEROVERFLOW 2025 CTF.

A capture the flag challenge is designed to enable participants to test and improve their hacking, problem-solving, and security skills.

This challenge is a web-based challenge in which participants will need to sift through the code in order to find a weakness.

This challenge will have participants implement a html injection in the "Contact" form in order to increase their credits to buy a ship located on the "Our Spacecrafts" tab.

Upon doing so they will be able to purchase a ship and retrieve the "flag" required for completion of the challenge.

Working script:

"<script>localStorage.setItem('credits', '2000000');</script>"

This script will increase the users credits to '2000000' allowing them to purchase the ship and retrive the flag.