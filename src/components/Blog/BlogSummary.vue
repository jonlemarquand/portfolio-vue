<template>
    <div class="blog-summary">
        <img class="blog-image" :src="require(`../../assets/blogImages/${blogImg}`)" :alt="blogTitle" />
        <div class="blog-text">
            <h2>{{ blogTitle }}</h2>
            <div class="blog-category">{{ blogDate }} | {{blogCategory}}</div>
            <div class="blog-info">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blogTitle: String,
        blogDate: String,
        blogCategory: String,
        blogImg: String
    },
}
</script>

<style lang="scss" scoped>
.blog-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 750px;
    margin-bottom: 40px;
    cursor: pointer;

    h2 {
        padding: 0;
        margin: 0;
    }

    .blog-text {
        max-width: 600px;
    }

    .blog-image {
        border: 4px solid $lblue;
        width: 100px;
        height: 100px;
        transition: 0.4s ease-out;
        object-fit: cover;
    }

    .blog-category {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: $lblue;
    }

    .blog-info {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: $dblue;
    }

    &:hover {
        h2 {
            color: $lblue;
        }
        .blog-info {
            color: $lblue;
        }
        .blog-image {
            width: 120px;
            height: 120px;
        }
    }
    @media (max-width: $phoneWidth) {
        width: 80%;
        margin: 0 20px;
        flex-direction: column;

        .blog-image {
            width: 100%;
            height: 80px;
            object-fit: cover;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        &:hover {
            .blog-image {
                width: 100%;
                height: 80px;
            }
        }
    }
}
</style>