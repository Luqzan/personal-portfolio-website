-- CreateTable
CREATE TABLE "portfolio_projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "github_link" TEXT NOT NULL,

    CONSTRAINT "portfolio_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_projects_pictures" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "portfolio_projects_pictures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "revenue_month_key" ON "revenue"("month");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "portfolio_projects_pictures" ADD CONSTRAINT "portfolio_projects_pictures_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "portfolio_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

