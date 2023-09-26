# ARM PROJECT

### Routing

- Login : localhost:3000/
- Dashboard :
  - Home : /dashboard
  - Activities : /dashboard/activities
  - Assets : /dashboard/assets/
  - Bills & Reimbursements : /dashboard/bills
  - Insight : /dashboard/insight
  - Help & Support : /dashboard/help
  - Create project : /dashboard/project/create
  - Recent activities : /dashboard/recent-activity
  - List draft projects : /dashboard/project/draft
  - List project status : /dashboard/project/status
  - Detail project (status & draft): /dashboard/project/(id_project)
  - List Delivery status : /dashboard/delivery-status
  - Detail delivery status : /dashboard/delivery-status/(id_project)
  - Archive : /dashboard/archive
  - Detail archive : /dashboard/archive/(id_project)
  - Quotation : /dashboard/quotation
  - Detail quotation : /dashboard/quotation/(id_project)
  - Add quotation : /dashboard/quotation/add
  - List invoice : /dashboard/invoice
  - Detail invoice : /dashboard/invoice/(id_project)
  - List billings : /dashboard/billing
  - Detail billings : /dashboard/billing/(id_project)
  - List reimbursement : /dashboard/reimbursement
  - Detail reimbursement :    /dashboard/reimbursemetn/(id_project)
  - List outlet : /dashboard/outlet
  - Detail outlet : /dashboard/outlet/(id_outlet)
  - List logistic report : /dashboard/logistic-report
  - Detail logistic report : /dashboard/logistic-report/(id)
  - List project report : /dashboard/project-report
  - Detail project report : /dashboard/project-report/(id)
  - Spending analytic : /dashboard/spending-analytic
  - Activities analytic : /dashboard/activities-analytic
- Configuration :
  - List FAQ : /dashboard/configuration/faq
  - Add FAQ : /dashboard/configuration/faq/add
  - Edit FAQ : /dashboard/configuration/faq/edit/(id)
  - List Outlet Type : /dashboard/configuration/outlet-type
  - Add Outlet Type : /dashboard/configuration/outlet-type/create
  - Edit Outlet Type : /dashboard/configuration/outlet-type/edit/(id)

### Seeder

Cara seeder :
    - akses halaman berikut : localhost:3000/dev/seeder/ARM_wibudev
    - setelah success, maka seeder telah berhasil diinput/update
    - data yang diseeder merupakan data untuk user role, status project, project category, 1 akun user dan profile
    - selain data yang diseeder maka akan ada inputan form didalam sistem nantinya (configuration)

### Github Branch

- join : merupakan endpoint dari merge antara kontributor
- build : merupakan branch yang digunakan untuk update pada server testing
- fix-error : merupakan branch yang digunakan untuk handling error / apa bila terjadi error

### Server

- Testing : arm.wibudev.com
- Real : *undefined*

***file ini akan terus diupdate apabila ada pembaruan terhadap routing, api, seeder maupun segala hal yang berkaitan dengan sistem*
