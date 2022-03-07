exports.getNumberOfDaysLeft = (endDate, date = new Date().getTime()) => {
    const billingStartDate = new Date(date);
    const billingEndDate = new Date(endDate)
    const dateDifference = billingEndDate.getTime() - billingStartDate.getTime();
    const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    return days
}