/*********************************
 * MULTI USER LICENSE SYSTEM
 *********************************/

const users = [
    { username: "sadid", password: "SHADID21", expire: "2026-01-29" },
    { username: "user1", password: "1111", expire: "2026-03-01" },
    { username: "user2", password: "2222", expire: "2026-02-15" }
];

// ===== PASSWORD CHECK =====
function verifyPassword(inputPassword) {
    const user = users.find(u => u.password === inputPassword);

    if (!user) {
        return { status: false, reason: "INVALID" };
    }

    const today = new Date();
    const expiry = new Date(user.expire);
    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        return { status: false, reason: "EXPIRED", days: 0 };
    }

    return {
        status: true,
        user: user.username,
        daysLeft: diffDays
    };
}

// ===== SHOW LICENSE INFO =====
function showLicense(days) {
    const licenseDiv = document.getElementById("licenseTime");
    const predictDiv = document.getElementById("predict");

    licenseDiv.innerText = days + " Days Left";
    licenseDiv.style.color = "lime";

    predictDiv.style.color = "";
}
