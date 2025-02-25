const submitForm = async (formData) => {
    try {
        console.log("📤 Yuborilayotgan ma'lumot:", formData); // Konsolga yuborilayotgan ma'lumotni chiqarish

        const response = await fetch("https://localhost:7254/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        console.log("📥 Server javobi:", response); // Server javobini konsolga chiqarish

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ Server xatosi: ${response.status} - ${errorText}`);
            throw new Error(`Server error: ${response.status} - ${errorText}`);
        }

        const responseData = await response.json(); // Javobni JSON formatda olish
        console.log("✅ Serverdan kelgan javob:", responseData); // Konsolga serverdan kelgan javobni chiqarish

        return { status: "pass", message: "Form submitted successfully!", data: responseData };
    } catch (error) {
        console.error("🚨 Xatolik:", error.message); // Xatoni konsolga chiqarish
        return { status: "fail", message: error.message };
    }
};

// ✅ **To‘g‘ri eksport qilish**
export default submitForm;

