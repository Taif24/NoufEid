// قائمة الأسماء المحددة مسبقًا ولا يمكن تعديلها من الموقع
let names = ["ليان" , "لولو" , "العنود" , "ناصر" , "محمد" , "شوشو" , "نورة" , "نوال" , "نوف" , "عبد العزيز"];
let usedNames = [];

function startDraw() {
    if (names.length === 0) {
        document.getElementById("result").innerHTML = "🚫 خلصت الأسماء!";
        return;
    }

    // اختيار اسم عشوائي وحذفه من القائمة
    let randomIndex = Math.floor(Math.random() * names.length);
    let selectedName = names.splice(randomIndex, 1)[0];

    // تخزين الاسم المستخدم
    usedNames.push(selectedName);

    document.getElementById("result").innerHTML = `🎉 الشخص الي جاك: <strong>${selectedName}</strong>`;
    updateRemainingNames();
}

function resetDraw() {
    // إعادة جميع الأسماء كما كانت
    names = [...usedNames];
    usedNames = [];
    document.getElementById("result").innerHTML = "";
    updateRemainingNames();
}

// تحديث قائمة الأسماء المتبقية
function updateRemainingNames() {
    document.getElementById("remainingNames").innerHTML = `الأسماء الباقية: ${names.join(", ")}`;
}

// عرض الأسماء المتبقية عند فتح الموقع
updateRemainingNames();
