function filterValidEmails(input) {
    if (!Array.isArray(input)) {
      return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
      return "Mảng không có phần tử nào";
    }
    let validEmails = input.filter((email) => {
      if (typeof email !== "string") {
        return false;
      }
      return email.includes("@") && !email.includes(" ");
    });
  
    return validEmails;
  }
  console.log(
    filterValidEmails([
      "john.doe@gmail.com",
      "invalidemail.com",
      "hello@domain.net",
      "space@out.com",
    ])
  );
  console.log(filterValidEmails([]));
  console.log(filterValidEmails("abc"));