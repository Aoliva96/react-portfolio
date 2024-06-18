// Helper functions
// =================

// Function to capitalize the first letter of a string
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to remove any hyphens and capitalize a string
export function noHyphensAllCaps(string) {
  return string
    .replace(/-/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

// Function to validate email address with a regex
export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
