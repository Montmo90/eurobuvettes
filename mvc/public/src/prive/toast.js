//Toast
let countToast = 0;
function toast(type, title, content) {
    let t = `  
    <div id="toast${countToast}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-${type} bg-gradient text-white">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${content}
        </div>
    </div>`;

    $("#mainToast").append(t);

    let toast = new bootstrap.Toast($(`#toast${countToast}`));
    toast.show();

    countToast++;
}