const submitForm = async (formData) => {
    try {
        const response = await fetch("https://localhost:7254/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status} - ${await response.text()}`);
        }

        return { status: "pass", message: "Form submitted successfully!" };
    } catch (error) {
        return { status: "fail", message: error.message };
    }
};

// ✅ **To‘g‘ri eksport qilish**
export default submitForm;
