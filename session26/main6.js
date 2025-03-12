function convertDateFormat(dates) {
    if (!Array.isArray(dates)) {
        return "Dữ liệu không hợp lệ";
    }
    if (dates.length === 0) {
        return "Mảng không có phần tử nào";
    }
    return dates.map((date) => {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    });
}
console.log(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(convertDateFormat([]));
console.log(convertDateFormat("abc"));