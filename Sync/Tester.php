<?php
    // アップロードされたファイルがjpeg形式か確認
    if ($_FILES["file"]["type"] == "image/jpeg") {
        if ($_FILES["file"]["error"] > 0) {
            echo "Return Code:" . $_FILES["file"]["error"] . "";
        } else {
            echo "Upload:" . $_FILES["file"]["name"] . "";
            echo "Type:" . $_FILES["file"]["type"] . "";
            echo "Size:" . ($_FILES["file"]["size"] / 1024) . "Kb";
            echo "Temp file:" . $_FILES["file"]["tmp_name"] . "";

            // サーバー上に既にファイルが存在していないか確認
            if (file_exists("upload/" . $_FILES["file"]["name"])) {
                echo $_FILES["file"]["name"] . "already exists.";
            } else {
                move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
                echo "Stored in:" . "upload/" . $_FILES["file"]["name"];
            }
        }
    } else {
        echo "Invalid file";
    }
?>
