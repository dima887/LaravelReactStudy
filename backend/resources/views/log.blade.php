<?php

    ?>

    <form method="POST" action="/api/login">
        @csrf
        <input type="email" name="email">
        <input type="password" name="password">
        <!-- Equivalent to... -->
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <button>Send</button>
    </form>

