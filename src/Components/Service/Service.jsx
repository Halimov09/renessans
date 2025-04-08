const BOT_TOKEN = "7845781687:AAFCT8XzM8ZhKQkZJT2pKbtUERvuKn2VETc";
const CHAT_ID = "-1002406594366"; 

const submitForm = async (formData) => {
    try {

        const message = `
📥 Yangi Ariza:
👤 Ism: ${formData.Name}
📞 Raqam: ${formData.Numbers}
📚 Kurs: ${formData.Course}
        `;

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML"
            })
        });

        const data = await response.json();

        if (!data.ok) {
            throw new Error(`Telegram API error: ${data.description}`);
        }

        return { status: "pass", message: "Ariza muvaffaqiyatli yuborildi! " };

    } catch (error) {
        return { status: "fail", message: "Xatolik yuz berdi: " + error.message };
    }
};

export default submitForm;
