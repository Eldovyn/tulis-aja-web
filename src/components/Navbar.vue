<script setup lang="ts"></script>

<template>
    <nav class="navbar bg-gray-10 shadow-sm">
        <div class="flex-1 flex-row">
            <a class="btn btn-ghost text-xl">tulis.aja</a>
            <p class="text-sm ps-5 text-gray-500">12 Notes</p>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul tabindex="-1" class="menu menu-sm dropdown-content bg-gray-10 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>