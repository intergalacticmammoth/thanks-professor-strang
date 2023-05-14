<script>
    function ToggleThanksForm() {
        const thanksForm = document.getElementById('thanks-form');
        thanksForm.style.display = thanksForm.style.display === 'flex' ? 'none' : 'flex';
    }
</script>

<button on:click={ToggleThanksForm}>
    Say Thanks
</button>
