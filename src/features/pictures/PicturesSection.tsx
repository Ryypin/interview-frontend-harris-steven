import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import usePicturesStyle from './PicturesSection.style';
import { useFetchPhotosMutation } from '@services';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PicturesSection = () => {
    const [fetchPhotos, { data: photos }] = useFetchPhotosMutation();

    useEffect(() => {
        fetchPhotos();
    }, [fetchPhotos]);

    const { classes } = usePicturesStyle();
    const { t } = useTranslation();

    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.pictures')}
                </Typography>
                <div>
                    {photos && (
                        <ImageList sx={{ width: 1200, height: 1200 }} cols={2} rowHeight={600}>
                            {photos.map((photo) => (
                                <ImageListItem key={photo.id}>
                                    <img src={photo.url} alt={`Photo ${photo.id}`} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </div>
            </>
        </Box>
    );
};

export default PicturesSection;
