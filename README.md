# Arm Project

### Note
- .env dibuat sendiri `touch .env` atau `nano .env` 
  - isi `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
- state namagement menggunakan **jotai** `https://jotai.org/`
- `app_modules` untuk menampung semua modules yang berhubungan dengan app
    - ```
        -- app_modules
            -- module_satu
                -- index.ts // main export
                -- src
                    -- view // menampung semua view
                    -- val // menampung jika ada value
                    -- fun // menampung function
                    -- dll
    ```
- endpoint branch ada di `dev`
- buat branch sesuai `fiture` atau bisa juga `app_modules`
- penyimpanan gambar dan file menggunakan `https://str.wibudev.com/`