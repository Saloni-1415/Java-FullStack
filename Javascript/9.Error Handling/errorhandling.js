try {
    const data = JSON.parse (" not a valid JSON");
    console.log(data);
    console.log("try block")
} catch (error) {
    console.log(error);
}