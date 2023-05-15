<script>
    export let button_text;
    export let form_id;

    function ToggleForm(form_id) {
        const clickedForm = document.getElementById(form_id);
        clickedForm.style.display = clickedForm.style.display === 'flex' ? 'none' : 'flex';
    }
</script>

<button on:click={ToggleForm(form_id)}>
    {button_text}
</button>
