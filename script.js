// tickets quantity, plus-minus button
function ticketsAmountCounting(amount, btnPress) {
    const ticketAmount = getParsedValue(amount);
    if (btnPress == "firstClass-plus-btn" || btnPress == "economyClass-plus-btn") {
        const addTickets = ticketAmount + 1;
        document.getElementById(amount).value = addTickets;
    } else {
        if (ticketAmount > 0) {
            const minusTickets = ticketAmount - 1;
            document.getElementById(amount).value = minusTickets;
        }
    }
}

function getInnerText(id) {
    const innertext = document.getElementById(id).innerText;
}

function getParsedValue(id) {
    const parsing = parseInt(document.getElementById(id).value);
    return parsing;
}
// fare calculation
function totalFare(firstClsAmount, economyClsAmount) {
    const subTotalId = getInnerText("subTotal");
    const subtotal = getParsedValue(firstClsAmount) * 150 + getParsedValue(economyClsAmount) * 100;
    document.getElementById("subTotal").innerText = subtotal;
    const taxPercent = getInnerText("taxPercentage");
    const taxAdded = subtotal * (10 / 100);
    document.getElementById("taxPercentage").innerText = taxAdded;
    const TotalId = getInnerText("Total");
    const finalTotal = subtotal + taxAdded;
    document.getElementById("Total").innerText = finalTotal;
}
// after pressing book now
function confirmationPage() {
    if (document.getElementById("Total").innerText > 0) {
        document.getElementById("booking-pg").style.display = "none";
        document.getElementById("confirmation-msg").style.display = "block";
        howManytickets("firstClass-ticket-amount");
        howManytickets('economyClass-ticket-amount');
        document.getElementById("totalFare").innerText = document.getElementById("Total").innerText;
    } else {
        alert("Please Book some Tickets");
    }
}

function howManytickets(quantity) {
    let fClsTickets = document.getElementById(quantity).value;
    if (quantity == "firstClass-ticket-amount") {
        document.getElementById("totalFclsTicket").value = fClsTickets;
    } else {
        document.getElementById("totalEclsTicket").value = fClsTickets;
    }
}