import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import JobsPage from "@/pages/JobsPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import JobPage from "@/pages/JobPage.vue";
import AddJobPage from "@/pages/AddJobPage.vue";
import EditJobPage from "@/pages/EditJobPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsPage,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobPage,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobPage,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJobPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export default router;
